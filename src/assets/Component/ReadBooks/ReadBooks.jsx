// import React from 'react';

// const ReadBooks = () => {


//     return (
//         <div>
//             <h1> Hellow, i am from Read Books </h1>

//         </div>
//     );
// };

// export default ReadBooks;

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const ReadBooks = () => {
	// const books = useLoaderData();

	const getLocalReadBookId = JSON.parse( localStorage.getItem('readBooks') ) ;

	// const [readBooks, setReadBooks] = useState([]);
	// useEffect(() => {
	// 	const readBooksVar = [];
	// 	for (const id of getLocalReadBookId) {
	// 		for (const book of books) {
	// 			if (book.bookId == id) {
	// 				readBooksVar.push(book);
	// 			}
	// 		}
	// 	}
	// 	setReadBooks(readBooksVar);
	// }, [books]);
    console.log(getLocalReadBookId , 'chart');

	const getPath = (x, y, width, height) => {
		return `M${x},${y + height}C${x + width / 3},${y + height} ${
			x + width / 2
		},${y + height / 3}
${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
			x + width
		}, ${y + height}
Z`;
	};
    const TriangleBar = (props) => {
		const { fill, x, y, width, height } = props;

		return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
	};
	return (
<ResponsiveContainer width={'100%'}
			height={400}>
<BarChart
			
			data={getLocalReadBookId}
			margin={{
				top: 20,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="bookName" />
			<YAxis />
            <Tooltip></Tooltip>
			<Legend></Legend>
			<Bar dataKey="totalPages"
				fill="#8884d8"
				shape={<TriangleBar />}
				label={{ position: "top" }}
			>
				{getLocalReadBookId?.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={colors[index % 20]} />
				))}
			</Bar>
		</BarChart>
</ResponsiveContainer>
	);
};

export default ReadBooks;