export const TEST_ITEMS = [
    {
        warehouse_id: 123,
        total_space: 100,
        remaining_space: 50,
        inventory: [{item_id: 123, item_quantity: 1},
                    {item_id: 456, item_quantity: 3},
                    {item_id: 789, item_quantity: 1},
                    {item_id: 101, item_quantity: 2},
                    {item_id: 102, item_quantity: 5}],
        changes: []
    },
    {
        warehouse_id: 456,
        total_space: 200,
        remaining_space: 100,
        inventory: [{item_id: 123, item_quantity: 3},
                    {item_id: 101, item_quantity: 3},
                    {item_id: 102, item_quantity: 3}],
        changes: []
    },
    {
        warehouse_id: 789,
        total_space: 300,
        remaining_space: 150,
        inventory: [{item_id: 123, item_quantity: 5},
                    {item_id: 101, item_quantity: 1},
                    {item_id: 102, item_quantity: 1},
                    {item_id: 456, item_quantity: 6},
                    {item_id: 789, item_quantity: 7},
                    {item_id: 145, item_quantity: 4}],
        changes: []
    }
];