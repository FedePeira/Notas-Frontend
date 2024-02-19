const Note = ({ note, toggleImportance }) => {
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',        
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
    
    const label = note.important ? 'make not important' : 'make important';
    
    return (
      <li className="note">
        {note.content}
        <button onClick={toggleImportance}>{label}</button>
      </li>
    )
  }
  
  export default Note