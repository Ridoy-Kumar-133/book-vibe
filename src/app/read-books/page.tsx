"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/Books.type";
import { useContext } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
  BarShapeProps,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[(index ?? 0) % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      stroke={color}
      fill={color}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];

  return <Label {...props} fill={fill} />;
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext)!;

  const data = readBooks.map((book: IBook) => ({
    name: book.bookName,
    uv: book.totalPages,
  }));

  return (
    <div className="container mx-auto my-5">
      {readBooks.length === 0 ? (
        <div className="rounded-xl bg-gray-100 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            No Read Books
          </h2>

          <p className="mt-2 text-gray-500">
            You have not added any books to your read list.
          </p>
        </div>
      ) : (
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <Tooltip cursor={{ fillOpacity: 0.5 }} />
          <XAxis dataKey="name" />
          <YAxis width="auto" />

          <Bar
            dataKey="uv"
            shape={TriangleBar}
            activeBar
          >
            <LabelList
              content={CustomColorLabel}
              position="top"
            />
          </Bar>
        </BarChart>
      )}
    </div>
  );
};

export default ReadBooks;