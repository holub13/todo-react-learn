import React from "react";
import "./post-list-item.css";

// export default class PostListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       important: false,
//       like: false
//     };
//     this.onImportant = this.onImportant.bind(this);
//     this.onLike = this.onLike.bind(this);
//   }

//   onImportant() {
//     this.setState(({ important }) => ({
//       important: !important
//     }));
//   }
//   onLike() {
//     this.setState(({ like }) => ({
//       like: !like
//     }));
//   }

//   render() {
//     const { label } = this.props;
//     const { important, like } = this.state;
//     let classNames = "app-list-item d-flex justify-content-between";

//     if (important) {
//       classNames += " important";
//     }
//     if (like) {
//       classNames += " like";
//     }
//     return (
//       <div className={classNames}>
//         <span className="app-list-item-label" onClick={this.onLike}>
//           {label}
//         </span>
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             type="button"
//             className="btn-star btn-sm"
//             onClick={this.onImportant}
//           >
//             <i className="fa fa-star" />
//           </button>
//           <button type="button" className="btn-trash btn-sm">
//             <i className="fa fa-trash" />
//           </button>
//           <i className="fa fa-heart" />
//         </div>
//       </div>
//     );
//   }
// }

export default function PostListItem({
  item,
  onHahdleClick,
  onToggleImportant,
  onToggleLike,
  classNames
}) {
  const { label, id, important, like } = item;
  if (important || (important && like)) {
    classNames += " important";
  }
  if (like) {
    classNames += " like";
  }

  return (
    <li key={id} className="list-group-item">
      <div className={classNames}>
        <span className="app-list-item-label" onClick={() => onToggleLike(id)}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={() => onToggleImportant(id)}
          >
            <i className="fa fa-star" />
          </button>
          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={() => onHahdleClick(id)}
          >
            <i className="fa fa-trash" />
          </button>
          <i className="fa fa-heart" />
        </div>
      </div>
    </li>
  );
}
