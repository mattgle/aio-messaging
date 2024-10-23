import { App, MOCKED_APPS } from '@/constants/apps';
import styles from './Sidebar.module.scss';

import { useAppProviderStore } from '@/state/store';

function Sidebar() {
  const { changeSelectedApp } = useAppProviderStore();

  const handleChangeApp = (app: App) => () => {
    changeSelectedApp(app);
  };

  const renderApp = (app: App) => (
    <button type="button" key={app.name} onClick={handleChangeApp(app)} className={styles.appButton}>
      <img src={app.logo} alt={app.name} className={styles.appImage} />
    </button>
  );

  return <div className={styles.container}>{MOCKED_APPS.map(renderApp)}</div>;
}

export default Sidebar;
