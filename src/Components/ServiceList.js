import ServiceAdd from "./ServiceAdd";
import { nanoid } from "nanoid";
import {useSelector, useDispatch} from 'react-redux';

import { deleteService, editService } from '../Store/actions/serviceAction'

const  ServiceList = () => {


 
  const servicies = useSelector((state) => state.serviceList.servicies);
  const dispatch = useDispatch();

   
    console.log(servicies)
    return (
      <>
        <ServiceAdd />
        <div className="list">
          <ul>
            { servicies && servicies.map((s) => (
              <li key={s.id}>
                {s.name} {s.price}
                <button onClick={() => dispatch(deleteService(s.id))}>x</button>
                <button onClick={() => dispatch(editService(s))}>edit</button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }


export default ServiceList;