import React, { useState, useEffect } from "react";
import { myGifts } from "../../Services/APIs/UserAPI";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import FormDialog from "./FormDialog";
import { addProduct, removeProduct } from "../../Services/APIs/AdminAPI";
import toast, { Toaster } from "react-hot-toast";

const GiftCard = ({ gift, handleRemove }) => {
  const handleRemoveClick = async () => {
    try {
      await handleRemove(gift._id);
      console.log("Removing product:", gift._id);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-2 max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 hover:scale-105 transition-transform duration-300">
      <img
        className="object-cover object-center h-56 w-full"
        src={gift.image}
        alt={gift.name}
      />
      <div className="p-4">
        <h2 className="text-gray-900 font-semibold text-lg">{gift.name}</h2>
        <p className="mt-2 text-gray-600">{gift.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-900 font-bold">₹{gift.price}</span>
          <button
            className="px-3 py-1 bg-red-600 text-white font-semibold rounded hover:bg-red-700 active:bg-red-800"
            onClick={handleRemoveClick}
          >
            Remove Product
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminHome = () => {
  const [gifts, setGifts] = useState([]);
  const navigate = useNavigate();
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);

  const getData = async () => {
    try {
      const res = await myGifts();
      setGifts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Apply styles to the body element
    Object.assign(document.body.style, {
      backgroundImage: "url(/form1.avif)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      overflowY: "auto",
    });
  }, []);

  const handleLogout = () => {
    confirmAlert({
      title: "Confirm Logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            console.log("Logging out...");
            navigate("/");
          },
        },
        {
          label: "No",
          onClick: () => {
            // Do nothing
          },
        },
      ],
    });
  };

  const handleAddProduct = () => {
    setIsFormDialogOpen(true);
  };

  const handlePromptClose = async (action) => {
    setIsFormDialogOpen(false);

    if (action !== "cancel") {
      try {
        console.log(action);
        const res = await addProduct(action);

        if (res.status === 400) {
          toast.error("Server Error!");
        } else if (res.status === 200) {
          toast.success("New Product Added!");
          getData();
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to add product");
      }
    }
  };

  const handleRemove = async (id) => {
    try {
      const res = await removeProduct({ id });
      console.log(res.data);
      if (res.status === 200) {
        toast.success(res.data.message);
        getData();
      } else if (res.status === 202) {
        toast.error(res.data.message);
      } else {
        toast.error("Server Error");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove product");
    }
  };

  return (
    <>
      <Toaster />
      <div>
        <div className="flex justify-between px-5 py-4">
          <div>
            <button
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div>
            <button
              className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 active:bg-green-800"
              onClick={handleAddProduct}
            >
              Add New Product
            </button>
          </div>
        </div>
        <div className="text-center px-5">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white bg-orange-500 rounded-lg p-1">
            Product Catalog
          </h1>
        </div>
        <div
          className="py-12 p-4"
          style={{ maxWidth: "70vw", margin: "0 auto", height: "100%" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gifts.map((gift) => (
              <GiftCard key={gift._id} gift={gift} handleRemove={handleRemove} />
            ))}
          </div>
        </div>
      </div>
      {isFormDialogOpen && <FormDialog handleClose={handlePromptClose} />}
    </>
  );
};

export default AdminHome;
