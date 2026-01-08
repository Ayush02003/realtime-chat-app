import {create} from 'zustand'

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),

  messages: [],

  setMessages: (updater) =>
    set((state) => {
      // Case 1: functional update
      if (typeof updater === "function") {
        const nextMessages = updater(state.messages);
        return {
          messages: Array.isArray(nextMessages) ? nextMessages : state.messages,
        };
      }

      // Case 2: direct replacement
      return {
        messages: Array.isArray(updater) ? updater : state.messages,
      };
    }),
}));


export default useConversation;  