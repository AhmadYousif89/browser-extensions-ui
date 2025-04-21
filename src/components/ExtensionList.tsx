import { useState } from 'react';

import extensions from '../../data.json';
import ExtensionItem from './ExtensionItem';

type FilterOptions = 'All' | 'Active' | 'Inactive';

export default function ExtensionList() {
  const [extensionList, setExtensionList] = useState(extensions);
  const [filterType, setFilterType] = useState<FilterOptions>('All');

  const filteredExtensions = extensionList.filter((extension) =>
    filterType === 'Active'
      ? extension.isActive
      : filterType === 'Inactive'
      ? !extension.isActive
      : true,
  );

  const updateExtensionItem = (name: string, isActive: boolean) => {
    setExtensionList((prevList) =>
      prevList.map((extension) =>
        extension.name === name ? { ...extension, isActive } : extension,
      ),
    );
  };

  const removeExtensionItem = (name: string) => {
    setExtensionList((prevList) => prevList.filter((extension) => extension.name !== name));
  };

  return (
    <section>
      <div className='filter-container'>
        <h1>Extensions List</h1>
        <div className='filter-buttons'>
          {['All', 'Active', 'Inactive'].map((filter) => (
            <button
              key={filter}
              title={`Show ${filter.toLowerCase()} extensions`}
              className={filterType === filter ? 'active' : ''}
              onClick={() => setFilterType(filter as FilterOptions)}>
              {filter}
            </button>
          ))}
        </div>
      </div>
      {filteredExtensions.length === 0 && <p className='no-extensions'>No Extensions Found</p>}
      <ul className='extension-list'>
        {filteredExtensions.map((extension) => (
          <ExtensionItem
            key={extension.name}
            onExtensionChange={updateExtensionItem}
            onRemoveExtension={removeExtensionItem}
            {...extension}
          />
        ))}
      </ul>
    </section>
  );
}
