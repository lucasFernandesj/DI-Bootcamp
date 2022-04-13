-- SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- The first line is gonna return all of the rows including null , 
-- the second line specified the null values should not be counted
-- So its gonna count all of the results where id <> null

--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

--It's gonna count all of the rows excluding the one where id = 5

-- SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

    --It's gonna count all of the rows where the id is not present in the SecondTab table


    --   SELECT COUNT(*) 
    -- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

    -- It's gonna count all of the rows where ft.id that are also present in the SecondTab table and is not null