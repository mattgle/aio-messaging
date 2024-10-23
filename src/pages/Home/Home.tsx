import { useAppProviderStore } from '@/state/store';
import styles from './Home.module.scss';

function Home() {
  const { selectedApp } = useAppProviderStore();

  return (
    <div className={styles.container}>
      <p>{selectedApp.name}</p>
      <iframe
        src={selectedApp.url}
        title={selectedApp.name}
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      />
    </div>
  );
}

export default Home;
