// const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     // read file to string
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const books: any = {};
//       const text = e.target?.result as string;
//       const json = toObject(text);
//       console.log(json);
//       json.map((record) => {
//         if (record.title) {
//           if (!books[record.title]) {
//             const book = {
//               title: record.title,
//               author: record.author,
//               records: [],
//             };
//             books[record.title] = book;
//             setBooks((pre) => [...pre, book]);
//           }
//           books[record.title].records.push(record);
//         }
//       });
//       setRecords(json);
//     };
//     reader.readAsText(file);
//   };