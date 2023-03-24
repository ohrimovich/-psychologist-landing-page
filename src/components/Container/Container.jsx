import style from './container.module.scss';

function Container({ children, padding }) {
	return (
		<div className={style.container} style={{ padding: padding }}>{children}</div>
	);
};

export default Container;
