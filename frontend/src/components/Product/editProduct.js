import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './editProduct.css'
import imgButtonEdit from '../../imgs/p10.png'
import api from '../../services/api'
import logo from '../../imgs/p4.png'
import imgButton from '../../imgs/p7.png'
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
  const [username, setUsername] = useState('');
  const [usercategory, setPCategory] = useState('');
  const [useprice, setPrice] = useState('');
  const [useimg, setImg] = useState('');
  const setAviso = props.aviso

  async function handleSubmit(e) {
    e.preventDefault();
    if ((username === '') || (usercategory === '') || (useprice === '')) {
      setAviso('')
    } else {
      console.log(useimg)
      let formData = new FormData();
      formData.append("image_path", useimg, useimg.name);
      formData.append("name", username)
      formData.append("price", useprice)
      formData.append("category", usercategory)

      const response = await api.post('product/post', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      setAviso(response.data.message)
    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="modal-div" >
      <div className="product-container" >
        <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
          <img className="logo" src={logo} alt="Point" />
          <input
            className='inputNameProduct'
            placeholder='Nome do Produto'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            className='inputCategoryProduct'
            value={usercategory}
            type="text"
            placeholder='Categoria do Produto'
            onChange={e => setPCategory(e.target.value)}
            required
          />
          <input
            className='inputPrecoProduct'
            value={useprice}
            type="float"
            placeholder='Preço do Produto'
            onChange={e => setPrice(e.target.value)}
            required
          />
          <input
            className='inputFileProduct'
            type="file"
            placeholder='Imagem do Produto'
            onChange={e => setImg(e.target.files[0])}
            required
          />

          <button data-testid="form-btn" type='submit' > <img className="imgButton" src={imgButton} /> <p className='nameButtonProduct'>OK</p></button>
        </form>
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