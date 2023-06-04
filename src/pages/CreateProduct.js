import React, {useEffect, useState} from 'react';
import {Form, Button, Container, ListGroup, Alert} from 'react-bootstrap';
import API_ROUTES from "../api";
const CreateProductForm = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [images, setImages] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (showSuccess) {
            setTitle('')
            setCategory('')
            setBrand('')
            setDescription('')
            setPrice('')
            setQuantity('')
            setImages([])

            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [showSuccess]);
    const handleSubmit = (event) => {
        event.preventDefault();

        const productData = {
            title: title,
            category: category,
            brand: brand,
            description: description,
            price: parseFloat(price),
            quantity: parseInt(quantity),
        };
        fetch(`${API_ROUTES.PRODUCT_SERVICE}/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(productData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Продукт успешно создан:', data);
                const productId = data._id;
                const uploadUrl = `${API_ROUTES.PRODUCT_SERVICE}/product/upload/${productId}`;
                const uploadFormData = new FormData();
                images.forEach((image) => {
                    uploadFormData.append('images', image);
                });
                fetch(uploadUrl, {
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: uploadFormData,
                })
                    .then((uploadResponse) => {
                        console.log('Картинки успешно загружены:', uploadResponse);
                        setShowSuccess(true);
                    })
                    .catch((uploadError) => {
                        console.error('Ошибка при загрузке картинок:', uploadError);
                    });
            })
            .catch((error) => {
                console.error('Ошибка при создании продукта:', error);
                // Дополнительные действия при ошибке создания продукта
            });
    };

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setImages([...images, ...files]);
    };

    const handleImageRemove = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    return (
        <Container className="my-4">
            {showSuccess && (
                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                    Продукт успешно создан!
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Название:</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlId="category">
                    <Form.Label>Категория:</Form.Label>
                    <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlId="brand">
                    <Form.Label>Бренд:</Form.Label>
                    <Form.Control type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Описание:</Form.Label>
                    <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)}
                                  required/>
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Цена:</Form.Label>
                    <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                </Form.Group>

                <Form.Group controlId="quantity">
                    <Form.Label>Количество:</Form.Label>
                    <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                  required/>
                </Form.Group>

                <Form.Group controlId="images">
                    <Form.Label>Изображения:</Form.Label>
                    <Form.Control type="file" multiple onChange={handleImageChange}/>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 button">
                    Создать продукт
                </Button>

            </Form>

            {images.length > 0 && (
                <ListGroup className="mt-4">
                    <ListGroup.Item variant="info">Картинки, которые загружены:</ListGroup.Item>
                    <div className="d-flex flex-wrap">
                        {images.map((image, index) => (
                            <div key={index} className="m-2">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Image ${index}`}
                                    className="img-thumbnail"
                                    style={{width: '200px', height: '200px', objectFit: 'contain'}}
                                />
                                <Button variant="danger" size="sm" className="mt-2"
                                        onClick={() => handleImageRemove(index)}>
                                    Удалить
                                </Button>
                            </div>
                        ))}
                    </div>
                </ListGroup>
            )}
        </Container>
    );
};

export default CreateProductForm;
