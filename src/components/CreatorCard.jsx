const CreatorCard = ({ name, Url, description, imageUrl }) => {
  const handleEdit = () => {
    <Link to="/edit"></Link>;
  };
  const handleDelete = () => {};
  return (
    <div>
      <div className="creator-card">
        <img src={imageUrl} alt={name} />
        <h2 className="creator-name">{name}</h2>
        <p className="creator-description">{description}</p>
      </div>

      <div className="button">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default CreatorCard;
