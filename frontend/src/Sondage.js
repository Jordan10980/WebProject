import Select from 'react-select';
import React, { useState, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, json,useNavigate } from 'react-router-dom';
import { aliments } from './data';
import { DatePicker, Space } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Pagination } from 'antd';
import'./Sondage.css';



const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const maxLimit = 10;

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const onChange = (date, dateString) => {
    console.log(date, dateString);
};

function Sondage() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [formData, setFormData] = React.useState({});
    const [dateNaissance, setDateNaissance] = useState(null);
    const [isPage1Clicked, setIsPage1Clicked] = useState(false); // pour la condition sur bouton valider
  

    const handleDateChange = (date, dateString) => {
        setDateNaissance(dateString);
      };
        
    const onFinish = (values) => {
        console.log('Success:', values);
        setFormData(values);
    };

   
    const handleChange = (selected) => {
        if (selected.length <= 10) {
          setSelectedOptions(selected);
        }
      };
  
    const page1Ref = useRef(null);
    const page2Ref = useRef(null);

    const navigate = useNavigate();

    const [response, setResponse] = useState(null); // Pour l'affichage des erreurs ou des success
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const page1Rect = page1Ref.current.getBoundingClientRect();
      const page2Rect = page2Ref.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const page1IsVisible = (page1Rect.top >= 0 && page1Rect.bottom <= screenHeight);
      const page2IsVisible = (page2Rect.top >= 0 && page2Rect.bottom <= screenHeight);
      if (page1IsVisible) {
        page1Ref.current.classList.add('zoom');
        page1Ref.current.classList.remove('dezoom');
      } else {
        page1Ref.current.classList.add('dezoom');
        page1Ref.current.classList.remove('zoom');
      }
      if (page2IsVisible) {
        page2Ref.current.classList.add('zoom');
        page2Ref.current.classList.remove('dezoom');
      } else {
        page2Ref.current.classList.add('dezoom');
        page2Ref.current.classList.remove('zoom');
      }
    };
  

    const sendDataToPHP = (data) => {
        fetch('https://mairie-beauvais.local/api/sondage.php', {
          method: 'POST',
          body: new URLSearchParams(data),
        })
        .then(response => response.text())
        .then(result => {
          setResponse(result);
          //console.log('Result:', result);
          if(result.includes('Vos données ont bien été envoyé')){
            navigate('/resultatsondage');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      };


      const handleSubmit = () => {
        // console.log('Form Data:', formData);
        // console.log(selectedOptions);
        // console.log('Date de naissance:', dateNaissance);
      
        // Envoyer les données à PHP
        const data = {
          formData: JSON.stringify(formData),
          selectedOptions: JSON.stringify(selectedOptions),
          dateNaissance: JSON.stringify(dateNaissance),
        };
        sendDataToPHP(data);
      };

  

    return (
        <>
          <div className='mainContainer'>
        <body className="poll">
          <div className="page1" ref={page1Ref}>
            <h3 className='stitle'>Sondage</h3>
            <Form className="quiz"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              style={{
                maxWidth: 900,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
                        <br/><br/><br/>
                        <Form.Item label="Nom" name="nom"
                            rules={[{ required: true, message: 'Veuillez mettre votre nom!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Prénom" name="prenom"
                          rules={[{ required: true, message: 'Veuillez mettre votre prénom!' }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="Date de naissance" name="date_naissance"
                          rules={[{ required: true, message: 'Veuillez mettre votre date de Naissance!' }]}>
                            <DatePicker format="DD/MM/YYYY" onChange={handleDateChange}  />
                        </Form.Item>
                        <Form.Item label="Adresse" name="adresse"
                          rules={[{ required: true, message: 'Veuillez mettre votre adresse!' }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="Code postal" name="code_postal"
                          rules={[{ required: true, message: 'Veuillez mettre votre code Postale!' }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="Ville" name="ville"
                          rules={[{ required: true, message: 'Veuillez mettre votre ville!' }]}>
                          <Input />
                        </Form.Item>
                        <Form.Item label="Téléphone" name="telephone"
                          rules={[{ required: true, message: 'Veuillez mettre votre téléphone!' }]}>
                          <Input />
                        </Form.Item>
                        <br/>
                        <Form.Item>
                            <Button htmlType="submit" onClick={() => {document.querySelector('.page2').scrollIntoView({behavior:'smooth',block:'end',inline:'nearest'});setIsPage1Clicked(true);}}>Passer à la sélection des aliments</Button>
                        </Form.Item>
                    </Form>

                    </div>
                    <br/><br/><br/>

                    <div className='page2' ref={page2Ref}>
                        <p> Vous pouvez choisir les aliments en fonction de vos choix en les selectionnant ci-dessous.</p>
                        <br/><br/><br/>
                        <Select
                            options={aliments}
                            isMulti
                            maxMenuHeight={200}
                            value={selectedOptions}
                            onChange={handleChange}
                            placeholder="Choisissez vos aliments"
                            isOptionDisabled={() => selectedOptions.length >= 10}
                        />
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <button className='b-valider' onClick={() => handleSubmit(formData)} disabled={!isPage1Clicked || selectedOptions.length === 0}>Valider</button>
                        {response ? <p className='response'>{response}</p> : null} 
                        </div>
                        
                    <br/><br/><br/><br/><br/><br/>
                    </body>
        </div>
        </>

    );
};

export default Sondage;