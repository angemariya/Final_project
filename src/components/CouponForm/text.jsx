export const PostDetail = () => {
  const { id } = useParams();

  const { data: post } = useGetPostQuery(id);

  const [
    updatePost, // This is the mutation trigger
    { isLoading: isUpdating }, // You can use the `isLoading` flag, or do custom logic with `status`
  ] = useUpdatePostMutation();

  return (
    <Box p={4}>
      <EditablePostName
        name={post.name}
        onUpdate={(name) => {
          // If you want to immediately access the result of a mutation, you need to chain `.unwrap()`
          // if you actually want the payload or to catch the error.
          // Example: `updatePost().unwrap().then(fulfilled => console.log(fulfilled)).catch(rejected => console.error(rejected))

          return (
            // Execute the trigger with the `id` and updated `name`
            updatePost({ id, name })
          );
        }}
        isLoading={isUpdating}
      />
    </Box>
  );
};


const api = createApi({
  baseQuery,
  endpoints: (build) => ({
    updatePost: build.mutation({
      query: ({ id, ...patch }) => ({ url: `post/${id}`, method: 'PATCH', body: patch }),
      // onStart, onSuccess, onError are useful for optimistic updates
      onStart({ id, ...patch }, mutationApi) {},
      onSuccess({ id }, { dispatch, getState, extra, requestId, context }, result) {}, // result is the server response, the 2nd parameter is the destructured `mutationApi`
      onError({ id }, { dispatch, getState, extra, requestId, context }) {},
      invalidates: ['Post'],
    }),
  }),
});