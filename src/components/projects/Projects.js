import React, { Component, useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./projects.scss";

const Projects = () => {
  return (
    <section className="project">
      <h2>Projects</h2>
      <div className="project-body">
        <CustomAnimatedCards></CustomAnimatedCards>
        <AnimatedList />
      </div>
    </section>
  );
};

const CustomAnimatedCards = () => {
  return <div></div>;
};

export default Projects;

const listData = [...Array(7).keys()];
const createCardFlipId = (index) => `listItem-${index}`;

const shouldFlip = (index) => (prev, current) =>
  index === prev || index === current;

const ListItem = ({ index, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <div className="listItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
              delayUntil={createCardFlipId(index)}
            >
              <img alt="" src="https://picsum.photos/seed/picsum/900/600" className="avatar" />
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map((i) => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={createCardFlipId(index)}
                >
                  <div />
                </Flipped>
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = ({ index, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      onStart={(el) => {
        setTimeout(() => {
          el.classList.add("animated-in");
        }, 400);
      }}
    >
      <div className="listItem-expanded" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent-expanded">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              delayUntil={createCardFlipId(index)}
            >
              <img alt="" src="https://picsum.photos/seed/picsum/900/700" className="avatar-expanded" />
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map((i) => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  delayUntil={createCardFlipId(index)}
                >
                  <div />
                </Flipped>
              ))}
            </div>
            <div className="additional-content">
              {listData.slice(0, 3).map((i) => (
                <div />
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

class AnimatedList extends Component {
  state = { focused: null };
  onClick = (index) =>
    this.setState({
      focused: this.state.focused === index ? null : index,
    });
  render() {
    return (
      <Flipper
        flipKey={this.state.focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: this.state.focused !== null,
          },
        }}
        decisionData={this.state.focused}
      >
        <ul className="list">
          {listData.map((index) => {
            return (
              <>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    index={this.state.focused}
                    onClick={this.onClick}
                  />
                ) : (
                  <ListItem index={index} key={index} onClick={this.onClick} />
                )}
              </>
            );
          })}
        </ul>
      </Flipper>
    );
  }
}

// const listData = [...Array(7).keys()];
// const createCardFlipId = (index) => `listItem-${index}`;

// const shouldFlip = (index) => (prev, current) =>
//   index === prev || index === current;

// const ListItem = ({ index, onClick }) => {
//   return (
//     <Flipped
//       flipId={createCardFlipId(index)}
//       stagger="card"
//       shouldInvert={shouldFlip(index)}
//     >
//       <div className="listItem" onClick={() => onClick(index)}>
//         <Flipped inverseFlipId={createCardFlipId(index)}>
//           <div className="listItemContent">
//             <Flipped
//               flipId={`avatar-${index}`}
//               stagger="card-content"
//               shouldFlip={shouldFlip(index)}
//               delayUntil={createCardFlipId(index)}
//             >
//               <div className="avatar" />
//             </Flipped>
//             <div className="description">
//               {listData.slice(0, 3).map((i) => (
//                 <Flipped
//                   flipId={`description-${index}-${i}`}
//                   stagger="card-content"
//                   shouldFlip={shouldFlip(index)}
//                   delayUntil={createCardFlipId(index)}
//                 >
//                   <div />
//                 </Flipped>
//               ))}
//             </div>
//           </div>
//         </Flipped>
//       </div>
//     </Flipped>
//   );
// };

// const ExpandedListItem = ({ index, onClick }) => {
//   return (
//     <Flipped
//       flipId={createCardFlipId(index)}
//       stagger="card"
//       onStart={(el) => {
//         setTimeout(() => {
//           el.classList.add("animated-in");
//         }, 400);
//       }}
//     >
//       <div className="expandedListItem" onClick={() => onClick(index)}>
//         <Flipped inverseFlipId={createCardFlipId(index)}>
//           <div className="expandedListItemContent">
//             <Flipped
//               flipId={`avatar-${index}`}
//               stagger="card-content"
//               delayUntil={createCardFlipId(index)}
//             >
//               <div className="avatar avatarExpanded" />
//             </Flipped>
//             <div className="description">
//               {listData.slice(0, 3).map((i) => (
//                 <Flipped
//                   flipId={`description-${index}-${i}`}
//                   stagger="card-content"
//                   delayUntil={createCardFlipId(index)}
//                 >
//                   <div />
//                 </Flipped>
//               ))}
//             </div>
//             <div className="additional-content">
//               {listData.slice(0, 3).map((i) => (
//                 <div />
//               ))}
//             </div>
//           </div>
//         </Flipped>
//       </div>
//     </Flipped>
//   );
// };
