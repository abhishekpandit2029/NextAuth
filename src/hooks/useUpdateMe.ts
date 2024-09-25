// export function useUpdateMe() {
//     const { trigger: updateClient, isMutating } =
//         useTransactionServerPutMutation<TClient>(urlKey, {
//             onSuccess: () => {
//                 message.success("Client updated successfully");
//                 revalidate(urlKey);
//             },
//         });

//     return {
//         data,
//         updateClient,
//         loading: isLoading || isMutating,
//     };
// }