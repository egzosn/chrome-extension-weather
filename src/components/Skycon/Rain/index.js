import styles from './index.less';
import React from 'react';
import classname from 'classname';

class index extends React.PureComponent {
    render() {
        let { className = {}, value } = this.props;
        return (<div className={classname(className, styles.component)}>
            <svg className={styles.svg} viewBox="0 0 160 240">
                <g className={styles.rainDrops}>
                    <path fill="#43647E" d="M69.942,143.08c-0.852,6.32-11.666,18.842-11.666,27.824c0,6.443,5.225,11.664,11.666,11.664
		c6.443,0,11.666-5.221,11.666-11.664C81.608,161.521,70.696,149.551,69.942,143.08z"/>
                    <path fill="#43647E" d="M110.126,143.08c-0.854,6.32-11.666,18.842-11.666,27.824c0,6.443,5.223,11.664,11.666,11.664
		s11.666-5.221,11.666-11.664C121.792,161.521,110.878,149.551,110.126,143.08z"/>
                    <path fill="#43647E" d="M150.308,143.08c-0.854,6.32-11.664,18.842-11.664,27.824c0,6.443,5.223,11.664,11.664,11.664
		c6.445,0,11.666-5.221,11.666-11.664C161.974,161.521,151.062,149.551,150.308,143.08z"/>
                </g>
                <g className={styles.cloudOffset}>
                    <path fill="#43647E" d="M144.901,144.943c-6.173,0-12.273-1.229-17.932-3.586c-6.06,2.516-12.216,3.586-19.998,3.586
	c-8.323,0-16.355-1.867-23.959-5.56c-5.329,2.71-11.261,4.118-17.492,4.118c-21.27,0-38.574-17.305-38.574-38.575
	c0-15.344,9.324-29.174,22.996-35.267c6.651-25.269,29.613-42.961,57.03-42.961c19.872,0,38.257,9.958,49.177,26.311
	c20.533,5.087,35.409,23.656,35.409,45.277C191.558,124.014,170.628,144.943,144.901,144.943z"/>
                </g>
                <g className={styles.rainCloud}>
                    <path fill="#43647E" d="M150.288,62.909c-8.357-15.386-24.713-25.209-42.316-25.209c-24.459,0-44.285,17.107-47.506,40.334
		c-12.301,2.766-21.52,13.77-21.52,26.894c0,15.204,12.369,27.575,27.574,27.575c6.396,0,12.348-2.076,17.133-5.916
		c7.713,4.943,15.701,7.357,24.318,7.357c8.145,0,13.682-1.295,20.041-4.818c5.42,3.154,11.541,4.818,17.889,4.818
		c19.66,0,35.656-15.996,35.656-35.656C181.558,80.111,167.886,65.081,150.288,62.909z"/>
                </g>
            </svg>
        </div>);
    }
}

export default index;