// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./style/Tambah.css"

function Add() {
  const [produk, setProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState("");

  const addData = async (e) => {
    e.preventDefault(); // menghindari reload(harus 1 file)

    try {
      await axios.post("http://localhost:2026/api/jumat", {  //pemanggilan Axios untuk melakukan permintaan HTTP POST ke endpoint yang diberikan
        produk: produk, 
        harga: harga,
        deskripsi: deskripsi,
        gambar: gambar,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div className="container">
      <h1>Form Tambah Data</h1>

        <Form onSubmit={addData}>
          <Form.Group className="input" >
            <Form.Label>Nama Produk :</Form.Label>
            <Form.Control
              name="produk"
              id="produk"
              value={produk}
              onChange={(e) => setProduk(e.target.value)}
              type="text"
              placeholder=".........."
            />
          </Form.Group>

          <Form.Group className="input" >
            <Form.Label>Harga :</Form.Label>
            <Form.Control
              type="number"
              name="harga"
              id="harga"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              placeholder=".........."
            />
          </Form.Group>
          <Form.Group className="input" >
            <Form.Label>Deskripsi :</Form.Label>
            <Form.Control
              type="text"
              name="text"
              id="deskripsi"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder=".........."
            />
          </Form.Group>
          <Form.Group className="input" >
            <Form.Label>Link Gambar :</Form.Label>
            <Form.Control
              type="text"
              name="gambar"
              id="gambar"
              value={gambar}
              onChange={(e) => setGambar(e.target.value)}
              placeholder=".........."
            />
          </Form.Group>

          <Button className="button" type="submit">
            Submit
          </Button>
        </Form>
      
    </div>
  );
}

export default Add;
