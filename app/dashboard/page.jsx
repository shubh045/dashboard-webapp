"use client";

import Navbar from "@components/navbar/Navbar";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import {useState, useEffect} from "react";
import { AiOutlineBell, AiOutlineLike } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { PiDownloadLight, PiUsersBold } from "react-icons/pi";
import { BsTags } from "react-icons/bs";

import "@styles/dashboard.css";
import Card from "@components/card/Card";

const Dashboard = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    let fetchedData = await fetch("https://dummyjson.com/products");
    fetchedData = await fetchedData.json();
    // console.log(fetchedData)
    setData(fetchedData.products);
  }

  useEffect(() => {
    getData();
  },[]);

  // console.log(data)

  const session = useSession();
  if (session.status === "unauthenticated") {
    redirect("/");
  }

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <div className="dashboard-head">
          <h3>Dashboard</h3>
          <div className="profile-and-search">
            <div className="search">
              <CiSearch id="search-icon" />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
              />
            </div>
            <span id="bell">
              <AiOutlineBell />
            </span>
            <img
              src={session?.data?.user?.image}
              width="30"
              height="30"
              alt="profile photo"
              id="profile-photo"
            />
          </div>
        </div>
        <div className="card-container">
          <Card
            icon={<PiDownloadLight id="c-icon" />}
            text="Total Revenues"
            amount="$2,129,430"
            percent="+2.5%"
          />
          <Card
            icon={<BsTags id="c-icon" />}
            text="Total Transactions"
            amount="1,520"
            percent="+1.7%"
          />
          <Card
            icon={<AiOutlineLike id="c-icon" />}
            text="Total Likes"
            amount="9,721"
            percent="+1.4%"
          />
          <Card
            icon={<PiUsersBold id="c-icon" />}
            text="Total Users"
            amount="9,721"
            percent="+4.2%"
          />
        </div>
      </div>

      {/* <button
        onClick={() => {
          signOut("google");
        }}
      >
        Sign out
      </button> */}
    </div>
  );
};

export default Dashboard;
