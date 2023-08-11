"use client"
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import  { useEffect, useState } from 'react';
import getHttp from "./api/getHttp";

function HomePage() {
  const [objects, setObjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState(null);
  
  const openModal = (object) => {
    console.log('estoy en open modal')
    setSelectedObject(object);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('estoy aqui')
    setSelectedObject(null);
    setIsModalOpen(false);
  };
  
  useEffect(() => {
    async function fetchData() {
      const objectsData = await getHttp();
      setObjects(objectsData);
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <Table objects={objects} openModal={openModal}/>
      {isModalOpen && <Modal object={selectedObject} closeModal={closeModal}/>}
    </div>
  );
}

export default HomePage;
