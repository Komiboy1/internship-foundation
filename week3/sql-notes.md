# SQL Notes

# View All Data
SELECT * FROM students;
This query displays every row and every column in the students table.

# View Specific Columns
SELECT name, age FROM students;
This query displays only the student's name and age

# Filter Data
SELECT * FROM students WHERE age > 20;
This query displays only students whose age is greater than 20

# Sort Data
SELECT * FROM students ORDER BY age DESC;
This query sorts students by age from highest to lowest

# Insert Data
INSERT into students (name, age, course) VALUES ('Test Student', 22, 'Engineering');
This query adds a new student record

# Update Data
UPDATE students SET age = 23 WHERE name = 'Test Student';
This query updates the age of Test Student

# DELETE Data
DELETE FROM students WHERE name = 'Test Student';
This query deletes Test Student from the table