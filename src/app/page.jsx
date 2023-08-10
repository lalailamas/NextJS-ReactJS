"use client"
import Table from "../../components/Table";
import  { useEffect, useState } from 'react';

async function getHttp() {
  const res = await fetch("https://eokyg5j5on90it0.m.pipedream.net/");
  const data = await res.json();
  return data.data;
}

function HomePage() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const objectsData = await getHttp();
      setObjects(objectsData);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <Table objects={objects} />
    </div>
  );
}

export default HomePage;
