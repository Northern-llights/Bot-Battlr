function ConfirmationPopup({ bot, confirmDelete, cancel }) {
  return (
    <div className="popup">
      <p>Are you sure you want to delete {bot.name}?</p>
      <button onClick={confirmDelete}>Yes, Delete</button>
      <button onClick={cancel}>Cancel</button>
    </div>
  );
}

export default ConfirmationPopup;
