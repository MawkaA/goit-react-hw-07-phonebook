import { configureStore} from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from '../shared/services/contacts';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
  