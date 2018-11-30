import PropTypes from 'prop-types';
import React from 'react';
import withRefs from '../utils/withRefs';
import { StyledFileUploader } from './FileUploader-styled';

const FileUploader = withRefs(
  ({
    children,
    forwardedRef,
    field,
    form,
    success = false,
    error = false,
    disabled = false,
    onChange,
    ...other
  }) => {
    let name, touched, errors, isSubmitting, setTouched, setFieldValue;
    if (field) {
      name = field.name;
      touched = form.touched;
      errors = form.errors;
      isSubmitting = form.isSubmitting;
      setTouched = form.setTouched;
      setFieldValue = form.setFieldValue;
    }

    const handleChange = e => {
      if (setFieldValue) {
        setTouched({ ...touched, [name]: true });
        setFieldValue(name, e.currentTarget.files);
      }

      if (onChange) {
        onChange(e);
      }
    };

    const isSuccess = () => {
      if (touched) {
        return touched[name] && !errors[name] ? true : false;
      }
      return success;
    };

    const isError = () => {
      if (touched) {
        return touched[name] && errors[name] ? true : false;
      }
      return error;
    };

    const isDisabled = () => {
      return isSubmitting || disabled;
    };

    return (
      <StyledFileUploader
        as="input"
        ref={forwardedRef}
        success={isSuccess()}
        error={isError()}
        disabled={isDisabled()}
        onChange={handleChange}
        {...other}
        type="file"
      />
    );
  }
);

FileUploader.propTypes = {
  /** Description TBD */
  children: PropTypes.node
};

FileUploader.defaultProps = {};

FileUploader.displayName = 'FileUploader';

export default FileUploader;
