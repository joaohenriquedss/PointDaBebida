import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './editProduct.css'
import imgButtonEdit from '../../imgs/p10.png'
import api from '../../services/api'
import logo from '../../imgs/p4.png'
import imgButton from '../../imgs/p7.png'
import imgDelete from '../../imgs/trash.png'
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #e0b61d;',
    boxShadow: theme.shadows[2],
    padding: theme.spacing(10, 3, 2),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [useprice, setPrice] = useState('');
  const setname = props.name
  async function handleSubmit(e) {
    e.preventDefault();

    const updateProduct = {
      "name": setname,
      "price": useprice
    }
    const response = await api.put('product/put', updateProduct, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
    const result = response.data.message
    alert(result)
    if (result == 'Produto Modificado') {
      window.location.reload(false);
    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  async function deleteProduct(e) {
    let name = props.name;
    const nameProduct = {
      "name": name
    }
    const response = await api.delete('product/delete/' + name);
    const data = await response.data
    window.location.reload(false)

  }

  const body = (
    <div className="modal-div" >
      <div className="product-container" >
        <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
          <img className="logo" src={logo} alt="Point" />
          <input
            className='inputNameProduct'
            placeholder={setname}
          />
          <input
            className='inputPrecoProduct'
            value={useprice}
            type="float"
            placeholder='Preço do Produto'
            onChange={e => setPrice(e.target.value)}
          />
          <button data-testid="form-btn" type='submit' > <img className="imgButton" src={imgButton} /> <p className='nameButtonProduct'>OK</p></button>
        </form>
        <button className='delete-btn' onClick={deleteProduct}><img className="imgDelete" src={imgDelete} /></button>
      </div>
    </div>
  );

  return (
    <div>
      <button className='buttonEdit' onClick={handleOpen}><img className="imgEdit" src={imgButtonEdit} /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}