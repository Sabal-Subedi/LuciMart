import CloseIcon from "@material-ui/icons/Close";

const MessageDiolag = ({ message }) => {
  return (
    <div className="messagediolag">
      <div className="messagedialog__background">
        <button className="messagedialog__btn">
          <CloseIcon />
        </button>
        <div className="messagedialog__msg">{message}</div>
      </div>
    </div>
  );
};

export default MessageDiolag;
