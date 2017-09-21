import has from './has';


describe('has() - Object key detection', () => {
  it('returns false if the base object is undefined.', () => {
    let obj;

    expect(has(obj, 'message')).toEqual(false);
  });

  it('returns true if an object has the key passed in.', () => {
    const obj = {
      message: 'Remember the Alamo!',
    };

    expect(has(obj, 'message')).toEqual(true);
  });

  it('returns false if an object does not have the key passed in.', () => {
    const obj = {
      message: 'Remember the Alamo!',
    };

    expect(has(obj, 'woops')).toEqual(false);
  });

  it('returns true if a nested object has the keys passed in.', () => {
    const obj = {
      user: {
        name: {
          first: 'Luis',
        },
      },
    };

    expect(has(obj, 'user', 'name', 'first')).toEqual(true);
  });

  it('returns false if a nested object does not have the keys passed in.', () => {
    const obj = {
      user: {
        name: {
          first: 'Luis',
        },
      },
    };

    expect(has(obj, 'user', 'name', 'last')).toEqual(false);
  });
});
