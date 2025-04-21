type ExtensionProps = {
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
  onExtensionChange: (name: string, isActive: boolean) => void;
  onRemoveExtension: (name: string) => void;
};

export default function ExtensionItem({
  name,
  logo,
  description,
  isActive,
  onExtensionChange,
  onRemoveExtension,
}: ExtensionProps) {
  return (
    <li key={name} className='extension-item'>
      <div className='extension-item__content'>
        <img src={logo} alt={`${name} icon`} />
        <div className='extension-item__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='extension-item__actions'>
        <button onClick={() => onRemoveExtension(name)}>Remove</button>
        <label htmlFor={`${name}-extension-state`}>
          <input
            type='checkbox'
            name='extension-item__state'
            id={`${name}-extension-state`}
            onChange={(e) => onExtensionChange?.(name, e.target.checked)}
            checked={isActive}
          />
        </label>
      </div>
    </li>
  );
}
