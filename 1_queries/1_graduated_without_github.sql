SELECT name, email, phone, end_date  
FROM students 
WHERE end_date IS NOT NULL 
AND github IS NULL;