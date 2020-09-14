import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { move, reorder } from "../../utils/dndFunctions";
import "./style.css";

import Card from "../../components/Card";
import ColumnTitle from "../../components/ColumnTitle";
import Header from "../../components/Header";
import FormButton from "../../components/FormButton";
import ItemDetail from "../../components/ItemDetail";

function Home() {
  const [listOne, setListOne] = useState([]);
  const [listTwo, setListTwo] = useState([]);
  const [listThree, setListThree] = useState([]);
  const [listFour, setListFour] = useState([]);
  const [popUpOne, setPopUpOne] = useState("hide");
  const [popUpTwo, setPopUpTwo] = useState("hide");
  const [popUpThree, setPopUpThree] = useState("hide");
  const [popUpFour, setPopUpFour] = useState("hide");
  const [itemToShow, setItemToShow] = useState({});

  const id2List = {
    droppable: "listOne",
    droppable2: "listTwo",
    droppable3: "listThree",
    droppable4: "listFour",
  };

  const getList = (id) => {
    const obj = {
      listOne,
      listTwo,
      listThree,
      listFour,
    };
    return obj[id2List[id]];
  };

  const popUp = (popUp, item) => {
    const keyActions = {
      1: () => {
        setItemToShow(item);
        setPopUpOne("display");
      },
      2: () => {
        setItemToShow(item);
        setPopUpTwo("display");
      },
      3: () => {
        setItemToShow(item);
        setPopUpThree("display");
      },
      4: () => {
        setItemToShow(item);
        setPopUpFour("display");
      },
    };
    keyActions[popUp]();
  };

  const popDown = () => {
    setPopUpOne("hide");
    setPopUpTwo("hide");
    setPopUpThree("hide");
    setPopUpFour("hide");
  };

  const addListOne = (item) => {
    const copy = listOne.map((item) => item);
    copy.unshift(item);
    setListOne(copy);
  };

  const addListTwo = (item) => {
    const copy = listTwo.map((item) => item);
    copy.unshift(item);
    setListTwo(copy);
  };

  const addListThree = (item) => {
    const copy = listThree.map((item) => item);
    copy.unshift(item);
    setListThree(copy);
  };

  const addListFour = (item) => {
    const copy = listFour.map((item) => item);
    copy.unshift(item);
    setListFour(copy);
  };

  const removeListOne = (item) => {
    const copy = listOne.filter((i) => item !== i);
    setListOne(copy);
  };

  const removeListTwo = (item) => {
    const copy = listTwo.filter((i) => item !== i);
    setListTwo(copy);
  };

  const removeListThree = (item) => {
    const copy = listThree.filter((i) => item !== i);
    setListThree(copy);
  };

  const removeListFour = (item) => {
    const copy = listFour.filter((i) => item !== i);
    setListFour(copy);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = items;

      const keyActions = {
        droppable: () => setListOne(state),
        droppable2: () => setListTwo(state),
        droppable3: () => setListThree(state),
        droppable4: () => setListFour(state),
      };

      keyActions[source.droppableId]();
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      const keyActions = {
        droppable: () => setListOne(result.droppable),
        droppable2: () => setListTwo(result.droppable2),
        droppable3: () => setListThree(result.droppable3),
        droppable4: () => setListFour(result.droppable4),
      };

      keyActions[Object.keys(result)[0]]();
      keyActions[Object.keys(result)[1]]();
    }
  };

  return (
    <>
      <Header />
      <div className="bodyContent">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} className="planned">
                <ItemDetail
                  color="blue"
                  visible={popUpOne}
                  title={itemToShow.title}
                  description={itemToShow.description}
                  date={itemToShow.date}
                  closeModal={() => {
                    popDown();
                  }}
                />
                <ColumnTitle title="Planejado" color="blue" />
                <FormButton
                  color="blue"
                  addItem={(item) => {
                    addListOne(item);
                  }}
                />
                {listOne.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <Card
                        provided={provided}
                        snapshot={snapshot}
                        value={item.title}
                        item={item}
                        removeItem={(item) => {
                          removeListOne(item);
                        }}
                        openModal={() => {
                          popUp(1, item);
                        }}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} className="running">
                <ItemDetail
                  color="brown"
                  visible={popUpTwo}
                  title={itemToShow.title}
                  description={itemToShow.description}
                  date={itemToShow.date}
                  closeModal={() => {
                    popDown();
                  }}
                />
                <ColumnTitle title="Executando" color="brown" />
                <FormButton
                  color="brown"
                  addItem={(item) => {
                    addListTwo(item);
                  }}
                />
                {listTwo.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <Card
                        provided={provided}
                        snapshot={snapshot}
                        value={item.title}
                        item={item}
                        removeItem={(item) => {
                          removeListTwo(item);
                        }}
                        openModal={() => {
                          popUp(2, item);
                        }}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="droppable3">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} className="deadlock">
                <ItemDetail
                  color="red"
                  visible={popUpThree}
                  title={itemToShow.title}
                  description={itemToShow.description}
                  date={itemToShow.date}
                  closeModal={() => {
                    popDown();
                  }}
                />
                <ColumnTitle title="Impasse" color="red" />
                <FormButton
                  color="red"
                  addItem={(item) => {
                    addListThree(item);
                  }}
                />
                {listThree.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <Card
                        provided={provided}
                        snapshot={snapshot}
                        value={item.title}
                        item={item}
                        removeItem={(item) => {
                          removeListThree(item);
                        }}
                        openModal={() => {
                          popUp(3, item);
                        }}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="droppable4">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} className="finished">
                <ItemDetail
                  color="green"
                  visible={popUpFour}
                  title={itemToShow.title}
                  description={itemToShow.description}
                  date={itemToShow.date}
                  closeModal={() => {
                    popDown();
                  }}
                />
                <ColumnTitle title="Finalizado" color="green" />
                <FormButton
                  color="green"
                  addItem={(item) => {
                    addListFour(item);
                  }}
                />
                {listFour.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <Card
                        provided={provided}
                        snapshot={snapshot}
                        value={item.title}
                        item={item}
                        removeItem={(item) => {
                          removeListFour(item);
                        }}
                        openModal={() => {
                          popUp(4, item);
                        }}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}

export default Home;
