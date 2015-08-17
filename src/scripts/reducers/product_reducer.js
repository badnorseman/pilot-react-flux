// Our app state would be designed like this. We will use normalizr to build JSON objects.
// {
//   isFetching: false, // We need to know if state is updated after request.
//   selected: id, // We might need to hold on this for editing.
//   products: {
//     id: 1 {
//       name: "A product",
//       coach: 1
//     },
//     id: 2 {
//       name: "Another product",
//       coach: 2
//     }
//   },
//   coaches: { // We need to know Coach info for each Product.
//     id: 1 {
//       name: "A coach"
//     },
//     id: 2 {
//       name: "Another coach"
//     }
//   }
// }
