import React, { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

import { customTheme } from './theme/customTheme';
import { Dashboard } from './pages/dashboard';
import { TasksContextProvider } from './contexts/tasksContext';

// Create a client
const queryClient = new QueryClient()

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <TasksContextProvider>
          <Dashboard />
        </TasksContextProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;
