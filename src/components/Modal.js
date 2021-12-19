function Modal(props) {
  function cancelHandler() {
    props.onCancel();
    props.onConfirm();
  }
  function confirmHandler() {
    props.onCancel();
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p> Are you Sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
