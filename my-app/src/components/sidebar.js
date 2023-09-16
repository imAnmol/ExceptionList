<Card>
        <SearchBar
          placeholder="Search for users"
          value={searchTerm}
          onChange={handleAssignClick}
        />
        
        {assigning && (
          <div>
            <Box mb={2}>
              <b>Select a user to assign the exception:</b>
            </Box>
            <ul>
              {data
                .filter((user) =>
                  user.exceptionId.includes(searchTerm)
                )
                .map((user) => (
                  <li key={user.exceptionId}>
                    <Button
                      variant="outlined"
                      onClick={() => handleAssign(user.exceptionId)}
                    >
                      {user.exceptionId}
                    </Button>
                  </li>
                ))}
            </ul>
            <Button variant="contained" color="primary" onClick={handleAssign}>
              Assign
            </Button>
          </div>
        )}
      </Card>
  