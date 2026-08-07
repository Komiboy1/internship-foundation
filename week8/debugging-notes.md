# Debugging Advanced Notes

## Browser DevTools Debugging

This document summarizes the debugging process used to identify and fix issues in the provided `broken-page.html` file. The Chrome DevTools Console, Network, Elements, and Sources panels were used to locate each bug and verify the fixes.

---

# Bug 1 – JavaScript Console Error

### Error Message

```
Uncaught ReferenceError: showMessage is not defined
```

### File and Line

```
broken-page.html
Line: 36
```

### Cause

The `showMessage()` function was called before it was defined, and no function with that name existed in the script.

### How It Was Found

- Opened the **Console** panel.
- Reloaded the page.
- Read the ReferenceError and identified the file and line number.

### Fix

Created the missing function:

```javascript
function showMessage() {
    console.log("Application loaded successfully.");
}

showMessage();
```

### Result

The console no longer displays the ReferenceError.

---

# Bug 2 – Failed Network Request

### Error

```
404 Not Found
```

### File

```
broken-page.html
```

### Cause

The application attempted to fetch data from an incorrect API endpoint:

```javascript
https://catfact.ninja/facts
```

### How It Was Found

- Opened the **Network** panel.
- Filtered requests using **Fetch/XHR**.
- Reloaded the page.
- Observed the failed request and checked its status code.

### Fix

Updated the endpoint to:

```javascript
https://catfact.ninja/fact
```

### Result

The API request completed successfully and returned a random cat fact.

---

# Bug 3 – CSS Styling Issue

### Problem

The page heading was not styled correctly.

### Cause

The HTML used:

```html
class="title"
```

while the CSS defined:

```css
.titel
```

The class names did not match.

### How It Was Found

- Used the **Elements** panel.
- Selected the heading element.
- Compared the HTML class with the CSS rules.

### Fix

Changed the CSS selector to:

```css
.title
```

### Result

The heading style was applied correctly.

---

# Bug 4 – Logic Error

### Problem

The application displayed an incorrect value instead of a random cat fact.

### Cause

The code displayed:

```javascript
data.data.length + 5
```

instead of the actual fact returned by the API.

### How It Was Found

- Added a breakpoint in the **Sources** panel.
- Stepped through the JavaScript code.
- Inspected the `data` object returned from the API.
- Confirmed that the fact is stored in `data.fact`.

### Fix

Updated the code to:

```javascript
document.getElementById("result").textContent = data.fact;
```

### Result

The webpage now displays a random cat fact correctly.

---

# Common JavaScript Errors

## 1. ReferenceError

### Meaning

A ReferenceError occurs when JavaScript tries to use a variable or function that has not been declared.

### Example

```javascript
console.log(userName);
```

### Output

```
ReferenceError: userName is not defined
```

### Common Causes

- Misspelled variable names
- Missing function definitions
- Using variables before declaration

---

## 2. TypeError

### Meaning

A TypeError occurs when an operation is performed on a value of the wrong type.

### Example

```javascript
null.toString();
```

### Output

```
TypeError: Cannot read properties of null
```

### Common Causes

- Accessing properties of `null` or `undefined`
- Calling something that is not a function
- Using methods on incompatible data types

---

## 3. SyntaxError

### Meaning

A SyntaxError occurs when JavaScript code contains invalid syntax.

### Example

```javascript
JSON.parse("not valid json");
```

### Output

```
SyntaxError: Unexpected token ...
```

### Common Causes

- Missing brackets or quotation marks
- Invalid JSON
- Typographical mistakes in code

---

# Understanding Stack Traces

A stack trace is a list of function calls that shows where an error occurred and how the program reached that point. It helps identify the exact file and line number responsible for an error, making it easier to trace and fix problems.

---

# Lessons Learned

- Always read JavaScript error messages carefully before making changes.
- The Console panel quickly identifies runtime errors.
- The Network panel helps diagnose failed API requests.
- The Elements panel is useful for locating HTML and CSS issues.
- The Sources panel allows developers to pause execution, inspect variables, and step through code to identify logic errors.
- A systematic debugging process is faster and more reliable than guessing.