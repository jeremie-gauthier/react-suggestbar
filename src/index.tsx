import * as React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const { Fragment } = React;

export type IComponentProps = {};

const Component: React.FC<IComponentProps> = ({}) => {
	return <Fragment></Fragment>;
};

Component.defaultProps = {};

Component.propTypes = {};

export default Component;
