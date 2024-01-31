// https://docs.pmnd.rs/zustand/guides/testing#setting-up-zustand-for-testing

import { expect, test } from 'vitest'
import { useItemStore } from './useItemStore'


test('Does Zustand merge the 1st level and not over-write it?', () => {
  const setTotal = useItemStore.getState().setTotal;
  const setBudget = useItemStore.getState().setBudget;
  setTotal(10);
  setBudget(20);
  expect(useItemStore.getState().total).toBe(10);
  expect(useItemStore.getState().budget).toBe(20);
})

test('Does upsert insert if new and update if already exists?', () => {
  console.count(`>>> is dev? ${import.meta.env.DEV}`);
  const item0 = { id: 0, name: "item name", price: 0, quantity: 2 };
  const item1 = { id: 1, name: "item name", price: 0, quantity: 4 };
  const upsertItem = useItemStore.getState().upsertItem;
  const count = useItemStore.getState().count;

  upsertItem(item0);
  upsertItem(item1);
  expect(count()).toBe(2);

  upsertItem({...item0, price: 9});
  expect(useItemStore.getState().items[0]).toStrictEqual({...item0, price: 9});
})