import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {

	const getRandEmailId = idLen => {
		if(!idLen) idLen = 78;
		const chars = [
			...(String.fromCharCode(...[...Array(26).keys()].map(n => n + 65)).split('')),
			...(String.fromCharCode(...[...Array(26).keys()].map(n => n + 97)).split('')),
			...Array(10).keys(),
		];
		console.log(chars);
		const output = [...Array(idLen).keys()].map(i => {
			return chars[Math.floor(Math.random() * chars.length)];
		}).join('');

		console.log(output);
		return `AA${output}%3D`;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={`/mail/inbox/id/:emailId`} element={
						<>
							<Header />
							<Body />
						</>
					}/>
					<Route 
						path='*'
						element={<Navigate to={`/mail/inbox/id/${getRandEmailId()}`} replace/>}
					/>
					{/* <Route path='/mail/' element={<Navigate to={`/`} replace/>}/>
					<Route path='/mail/inbox/' element={<Navigate to={`/`} replace/>}/>
					<Route path='/mail/inbox/id/' element={<Navigate to={`/`} replace/>}/> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
