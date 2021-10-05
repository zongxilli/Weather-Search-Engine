import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import {
	Container,
	Row,
	Col,
	Image,
	Form,
	FormControl,
	Navbar,
	ListGroup,
} from 'react-bootstrap';

const Home = () => {
	const [data, setData] = useState({ location: [], current: [] });
	const [city, setCity] = useState('Toronto');
	const [input, setInput] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			if (city === '') setCity('Toronto');

			const { data } = await axios.get(
				`http://api.weatherapi.com/v1/current.json?key=1d6f3fcda6864305920215216210510&q=${city}`
			);

			console.log(data);
			setData(data);
		};

		fetchData();
	}, [city]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setCity(input);
	};

	return (
		<>
			{data.current.condition && (
				<Container className='main-container'>
					<Navbar.Brand style={{ textAlign: 'center' }}>
						<h1>Weather Report :)</h1>
					</Navbar.Brand>
					<Form onSubmit={(e) => onSubmitHandler(e)}>
						<FormControl
							size='lg'
							placeholder='type city name and press enter'
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
					</Form>
					<Row className='weather-detail'>
						<Col xs lg={3} align='center'>
							<ListGroup variant='flush'>
								<ListGroup.Item as='h2'>{data.location.name}</ListGroup.Item>
								<ListGroup.Item>{data.location.country}</ListGroup.Item>
								<ListGroup.Item>{data.location.region}</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col xs lg={2} align='center'>
						
							<Image src={data.current.condition.icon} />
							<div>{data.current.condition.text}</div>
						</Col>
						<Col xs lg={4} align='center'>
							<ListGroup variant='flush'>
								<ListGroup.Item as='h2'>today feels like</ListGroup.Item>
								<ListGroup.Item as="h4">{data.current.feelslike_c} ℃</ListGroup.Item>
								<ListGroup.Item as="h4">{data.current.feelslike_f} ℉</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col xs lg={3} align='center'>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									visibility {data.current.vis_km} km(s) /{' '}
									{data.current.vis_miles} mile(s)
								</ListGroup.Item>
								<ListGroup.Item>
									wind degree: {data.current.wind_degree}
								</ListGroup.Item>
								<ListGroup.Item>
									wind direction: {data.current.wind_dir}
								</ListGroup.Item>
								<ListGroup.Item>
									wind speed: {data.current.wind_kph} kph /{' '}
									{data.current.wind_mph} mph
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
					<Row>
						<Col xs lg={12} as='h3' align='center'>
							last updated at: {data.current.last_updated}
						</Col>
					</Row>
				</Container>
			)}
		</>
	);
};

export default Home;
