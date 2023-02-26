import { useStore } from './store';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './pages/Board';

function App() {
  const store = useStore();
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </Provider>
  );
}

export default App;
