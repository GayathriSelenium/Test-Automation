describe('PWRT Form Entry', function () {
    it('Visits the main page', function () {
        cy.visit('http://localhost:8080?wellNumber=CFE015&currentRecoveryState=Failed')

    });

    it('Check all fields have been registered with Redux', function () {
        cy.window().its('store').invoke('getState').its('form').its('recoveryForm').its('registeredFields').should('deep.equal',
            {
                wellNumber: {
                    name: 'wellNumber',
                    type: 'Field',
                    count: 1
                },
                currentRecoveryState: {
                    name: 'currentRecoveryState',
                    type: 'Field',
                    count: 1
                },
                newRecoveryState: {
                    name: 'newRecoveryState',
                    type: 'Field',
                    count: 1
                },
                recoveryReason: {
                    name: 'recoveryReason',
                    type: 'Field',
                    count: 1
                },
                effectiveDate: {
                    name: 'effectiveDate',
                    type: 'Field',
                    count: 1
                },
                comment: {
                    name: 'comment',
                    type: 'Field',
                    count: 1
                }
            });
    });

    it('Check initial values have been set correctly', function () {

        // Interact with Redux store to check that form.recoveryForm.values.wellNumber is set correctly
        cy.window().its('store').invoke('getState').its('form').its('recoveryForm').its('initial').its('wellNumber').should('eq', 'CFE015')

        // Interact with Redux store to check that form.recoveryForm.values.currentRecoveryState is set correctly
        cy.window().its('store').invoke('getState').its('form').its('recoveryForm').its('initial').its('currentRecoveryState').should('eq', 'Failed')

        // Interact with Redux store to check that recoveryForm.recoveryState is set correctly
        cy.window().its('store').invoke('getState').its('recoveryForm').its('recoveryState').should('deep.equal', ["Awaiting Restart", "In Recovery"])

        // Interact with Redux store to check that recoveryForm.recoveryState is initially blank
        cy.window().its('store').invoke('getState').its('recoveryForm').its('recoveryStateReasons').should('deep.equal', [])
    });

    it('Change dropdown selections', function () {
        // Select option in drop down list
        cy.get('[id="new-recovery-state"]').click()
        cy.get('[id="new-recovery-state"]').get('[data-value="Awaiting Restart"]').click()

        // Interact with Redux store to check that recoveryForm.recoveryState is set correctly
        cy.window().its('store').invoke('getState').its('recoveryForm').its('recoveryStateReasons').should('deep.equal', ['Failed to restart after workover', 'Awaiting workover', 'Overide erroneous state change', 'Other'])

        // Select option in drop down list
        cy.get('[id="recovery-reason"]').click()
        cy.get('[id="recovery-reason"]').get('[data-value="Failed to restart after workover"]').click()

        // Check state in Redux has been updated appropriately
        cy.window().its('store').invoke('getState').its('form').its('recoveryForm').its('values').its('newRecoveryState').should('eq', 'Awaiting Restart')
        cy.window().its('store').invoke('getState').its('form').its('recoveryForm').its('values').its('recoveryReason').should('eq', 'Failed to restart after workover')
        
    });

    it('Change date in datepicker', function () {
        // Select date picker
        cy.get('[type="button"][aria-label="change date"]').click()

        // Change the date
        var d = new Date();
        var todayDay = d.getDate();
        var selectValue;

        // If not the first day of the month select yesterday
        console.log(todayDay);
        if (todayDay > 1) {
            selectValue = todayDay - 1;
        } else {
            // Go back a month and select the first day of the last month
            cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiPickersCalendarHeader-iconButton"').click()
            selectValue = 1;
        }
        cy.get('[class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit"]').contains(selectValue).click()

        // Select OK in date picker
        cy.get('[class="MuiButton-label"]').contains("OK").click()

        // Check state in Redux has been updated appropriately
        cy.window().its('store').invoke('getState').its('form').its('recoveryForm').its('values').its('effectiveDate').should('exist')
        
        
    });

    it('Type comment', function () {
        // Select comment field
        cy.get('[id="comment"]').click().type('Hello World!')

        // Check state in Redux has been updated appropriately
        cy.window().its('store').invoke('getState').its('form').its('recoveryForm').its('values').its('comment').should('eq', 'Hello World!')
        
    })

})