import { useState } from "react";
import React, { Component } from "react";
import {
  onChangeField,
  addService,
  clearForm,
} from "../Store/actions/serviceAction";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

const ServiceAdd = () => {
  const item = useSelector((state) => state.serviceAdd.item);

  const { price, name } = item;
  console.log(item);
  const dispatch = useDispatch();

  const handler = (e) => {
    //console.log(e.target);
    dispatch(onChangeField(e.target));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(222, item);
    //console.log('!', e.target)
    dispatch(addService(item));
    handleClear();
  };

  const handleClear = () => {
    dispatch(clearForm());
  };

  return (
    <form onSubmit={submitHandler} onReset={handleClear}>
      <div className="forms">
        <div>
          <label>Услуга</label>
          <input
            type="text"
            value={name}
            id="name"
            name="name"
            onChange={handler}
            required
          />
        </div>
        <div>
          <label>Цена</label>
          <input
            value={price}
            id="price"
            name="price"
            onChange={handler}
            required
          />
        </div>
        <button>Save</button>
        <button type="reset" onClick={() => handleClear()}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ServiceAdd;
