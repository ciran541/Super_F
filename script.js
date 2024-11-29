// Form field templates for each loan type
const fieldTemplates = {
    newLoan: `
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Stage of Purchase *</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="stagePurchase" value="bought" checked> Bought
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="stagePurchase" value="notBought"> Not Bought
                    </label>
                </div>
                <div class="form-sublabel">Have you purchased your property?</div>
            </div>

            <div class="form-group">
                <label class="form-label">Fixed or Floating Rates *</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="rateType" value="both" checked> Both
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="rateType" value="fixed"> Fixed
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="rateType" value="floating"> Floating
                    </label>
                </div>
                <div class="form-sublabel">Do you prefer fixed or floating rates?</div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Loan Amount *</label>
                <div class="input-group">
                    <div class="input-group-icon">$</div>
                    <input type="number" name="loanAmount" placeholder="Enter loan amount" required>
                </div>
                 <div class="error-message">Loan amount is required</div>
            </div>

            <div class="form-group">
                <label class="form-label">Has Your Current Property Been Sold? *</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="propertySold" value="yes" > Yes
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="propertySold" value="no" checked> No
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="propertySold" value="na"> Not Applicable
                    </label>
                </div>
            </div>
        </div>
    `,
    refinance: `
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Fixed or Floating Rates *</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="rateType" value="both" checked> Both
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="rateType" value="fixed"> Fixed
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="rateType" value="floating"> Floating
                    </label>
                </div>
                <div class="form-sublabel">Do you prefer fixed or floating rates?</div>
            </div>

            <div class="form-group">
                <label class="form-label">Existing Loan Amount *</label>
                <div class="input-group">
                    <div class="input-group-icon">$</div>
                    <input type="number" name="existingLoanAmount" placeholder="Enter existing loan amount" required>
                </div>
                 <div class="error-message">Existing Loan Amount is required</div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Is Your Current Bank the Original Lender? *</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="originalLender" value="yes" checked> Yes
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="originalLender" value="no"> No
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Is Your Lock-in Period Over? *</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="lockInPeriod" value="yes" checked> Yes
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="lockInPeriod" value="no"> No
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="lockInPeriod" value="notSure"> I'm Not Sure
                    </label>
                </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Current Financer *</label>
                <div class="input-group">
                    <div class="input-group-icon">🏦</div>
                    <select name="currentFinancer" required>
                        <option value="">--Current Financer --</option>
                        <option value="dbs" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-6.png">DBS</option>
                        <option value="scb" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-9.png">SCB</option>
                        <option value="anz" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-10.png">ANZ</option>
                        <option value="mb" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-11.png">Maybank</option>
                        <option value="ocbc" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-12.png">OCBC</option>
                        <option value="hsbc" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-13.png">HSBC</option>
                        <option value="cimb" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-14.png">CIMB</option>
                        <option value="uob" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-16.png">UOB</option>
                        <option value="citibank" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-17.png">Citibank</option>
                    </select>
                </div>
        </div>
    `,


    coupling: `
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Property Share of Owner 1 (Buyer) *</label>
                <div class="input-group percentage-input">
                    <div class="input-group-icon">%</div>
                    <input type="number" name="owner1Share" value="50" min="0" max="100" required>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Property Share of Owner 2 (Seller) *</label>
                <div class="input-group percentage-input">
                    <div class="input-group-icon">%</div>
                    <input type="number" name="owner2Share" value="50" min="0" max="100" required>
                </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label class="form-label">CPF Usage of Owner 1 (Buyer) *</label>
                <div class="input-group">
                    <div class="input-group-icon">$</div>
                    <input type="number" name="owner1Cpf" placeholder="Enter CPF usage" required>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">CPF Usage of Owner 2 (Seller) *</label>
                <div class="input-group">
                    <div class="input-group-icon">$</div>
                    <input type="number" name="owner2Cpf" placeholder="Enter CPF usage" required>
                </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Rough Market Price of Property *</label>
                <div class="input-group">
                    <div class="input-group-icon">$</div>
                    <input type="number" name="propertyPrice" placeholder="Enter property price" required>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Is Your Property Fully Paid? *</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="fullyPaid" value="yes" checked> Yes
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="fullyPaid" value="no"> No
                    </label>
                </div>
            </div>
        </div>

        <div id="notFullyPaidFields" class="hidden">
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Existing Loan Amount *</label>
                    <div class="input-group">
                        <div class="input-group-icon">$</div>
                        <input type="number" name="existingLoanAmount" placeholder="Enter existing loan amount">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Current Bank *</label>
                    <div class="input-group">
                        <div class="input-group-icon">🏦</div>
                       <select name="currentBank">
                        <option value="">-- Please Select --</option>
                        <option value="dbs" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-6.png">DBS</option>
                        <option value="scb" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-9.png">SCB</option>
                        <option value="anz" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-10.png">ANZ</option>
                        <option value="mb" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-11.png">Maybank</option>
                        <option value="ocbc" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-12.png">OCBC</option>
                        <option value="hsbc" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-13.png">HSBC</option>
                        <option value="cimb" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-14.png">CIMB</option>
                        <option value="uob" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-16.png">UOB</option>
                        <option value="citibank" data-logo="https://theloanconnection.com.sg/wp-content/uploads/2024/03/White-Elegant-Red-Bow-Discount-Gift-Voucher-Gift-Certificate-Logo-17.png">Citibank</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    `,
    equity: `
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Is Your Property Fully Paid? *</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="fullyPaid" value="yes" checked> Yes
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="fullyPaid" value="no"> No
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Rough Market Price of Property *</label>
                <div class="input-group">
                    <div class="input-group-icon">$</div>
                    <input type="number" name="propertyPrice" placeholder="Enter property price" required>
                </div>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Total CPF Usage of All Borrowers *</label>
                <div class="input-group">
                    <div class="input-group-icon">$</div>
                    <input type="number" name="totalCpfUsage" placeholder="Enter total CPF usage" required>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Plan to Sell in Next 1-2 Years? *</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="planToSell" value="yes" required> Yes
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="planToSell" value="no"> No
                    </label>
                </div>
            </div>
        </div>

        <div id="equityNotFullyPaidFields" class="hidden">
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label">Existing Loan Amount *</label>
                    <div class="input-group">
                        <div class="input-group-icon">$</div>
                        <input type="number" name="existingLoanAmount" placeholder="Enter existing loan amount">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label">Current Bank *</label>
                    <div class="input-group">
                        <div class="input-group-icon">🏦</div>
                        <select name="currentBank">
                            <option value="">-- Please Select --</option>
                            <option value="dbs">DBS</option>
                            <option value="uob">UOB</option>
                            <option value="ocbc">OCBC</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Styles for loading and feedback
const styles = `
.loading-spinner {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.feedback-message {
    position: fixed;
    top: -100px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 5px;
    transition: top 0.5s ease-in-out;
    z-index: 1001;
}

.feedback-success {
    background: #4CAF50;
    color: white;
}

.feedback-error {
    background: #f44336;
    color: white;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;

// Initialize form and add necessary elements
document.addEventListener('DOMContentLoaded', () => {
    // Add styles and UI elements
    document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);
    document.body.insertAdjacentHTML('beforeend', `
        <div class="loading-spinner">
            <div class="spinner"></div>
        </div>
        <div class="feedback-message"></div>
    `);

    // Initialize form based on URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const loanType = urlParams.get('enquiry');
    
    if (loanType) {
        const radioButton = document.querySelector(`input[name="loanType"][value="${loanType}"]`);
        if (radioButton) {
            radioButton.checked = true;
            updateFormFields(loanType);
        }
    }

    // Setup event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Loan type change
    document.querySelectorAll('input[name="loanType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            updateFormFields(e.target.value);
            handlePropertyTypeRestrictions(e.target.value);
        });
    });

    // Property type change
    document.querySelectorAll('input[name="propertyType"]').forEach(radio => {
        radio.addEventListener('change', validatePropertyTypeSelection);
    });

    // Real-time validation for required fields
    document.querySelectorAll('input[required]').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            const errorElement = field.parentElement.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        });
    });

    // Form submission
    const form = document.getElementById('loanForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
}

function validateField(field) {
    let isValid = true;
    const errorElement = field.parentElement.parentElement.querySelector('.error-message');
    
    // Clear previous error state
    field.parentElement.parentElement.classList.remove('error');
    if (errorElement) {
        errorElement.style.display = 'none';
    }

    // Check if field is empty
    if (!field.value.trim()) {
        isValid = false;
        const fieldName = field.parentElement.parentElement.querySelector('.form-label').textContent.replace('*', '').trim();
        if (errorElement) {
            errorElement.textContent = `${fieldName} field is required.`;
            errorElement.style.display = 'block';
        }
    }

    // Validate email format
    if (field.type === 'email' && field.value.trim()) {
        if (!isValidEmail(field.value)) {
            isValid = false;
            if (errorElement) {
                errorElement.textContent = 'Please enter a valid email address.';
                errorElement.style.display = 'block';
            }
        }
    }

    // Add validation for radio button groups
    if (field.type === 'radio') {
        const groupName = field.getAttribute('name');
        const isChecked = document.querySelector(`input[name="${groupName}"]:checked`);
        if (!isChecked) {
            const groupContainer = document.getElementById(`${groupName}Group`);
            const errorElement = groupContainer.querySelector('.error-message');
            if (errorElement) {
                errorElement.style.display = 'block';
            }
            isValid = false;
        }
    }

    if (!isValid) {
        field.parentElement.parentElement.classList.add('error');
    }

    return isValid;
}

// Define all possible fields for each loan type
const ALL_POSSIBLE_FIELDS = {
    commonFields: [
        'timestamp',
        'loanType',
        'propertyType',
        'name',
        'email',
        'contactNumber'
    ],
    newLoan: [
        'stagePurchase',
        'rateType',
        'loanAmount',
        'propertySold'
    ],
    refinance: [
        'rateType',
        'existingLoanAmount',
        'originalLender',
        'lockInPeriod',
        'currentFinancer'
    ],
    coupling: [
        'owner1Share',
        'owner2Share',
        'owner1Cpf',
        'owner2Cpf',
        'propertyPrice',
        'fullyPaid',
        'existingLoanAmount',
        'currentBank'
    ],
    equity: [
        'fullyPaid',
        'propertyPrice',
        'totalCpfUsage',
        'planToSell',
        'existingLoanAmount',
        'currentBank'
    ]
};

async function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submission started');
    
    let isValid = true;
    const form = e.target;
    
    // Clear all previous errors
    form.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    
    // Validate all required fields
    form.querySelectorAll('[required]').forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    if (isValid) {
        const loadingSpinner = document.querySelector('.loading-spinner');
        loadingSpinner.style.display = 'flex';

        try {
            const formData = new FormData(form);
            const data = {};
            
            // Get selected loan type
            const selectedLoanType = form.querySelector('input[name="loanType"]:checked').value;
            
            // Initialize all possible fields with empty values
            [...ALL_POSSIBLE_FIELDS.commonFields, 
             ...ALL_POSSIBLE_FIELDS.newLoan,
             ...ALL_POSSIBLE_FIELDS.refinance,
             ...ALL_POSSIBLE_FIELDS.coupling,
             ...ALL_POSSIBLE_FIELDS.equity
            ].forEach(field => {
                data[field] = '';
            });

            // Update with actual form values
            formData.forEach((value, key) => {
                if (form.querySelector(`input[type="radio"][name="${key}"]`)) {
                    const checkedRadio = form.querySelector(`input[type="radio"][name="${key}"]:checked`);
                    if (checkedRadio) {
                        data[key] = checkedRadio.value;
                    }
                } else {
                    data[key] = value;
                }
            });

            // Add timestamp
            data.timestamp = new Date().toISOString();
            
            console.log('Submitting data:', data);
            
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwTTZQiNUixuqcJmM_rIlIUemmQkKmPPVDWaL_VkFMKTrkCJPQ0yJ3bsMBESVYe89wM/exec';
            
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(data)
            });

            showFeedbackMessage('Form submitted successfully!', 'success');
            
            // Reset form and reinitialize based on URL parameter
            form.reset();
            
            // Get the loan type from URL parameter
            const urlParams = new URLSearchParams(window.location.search);
            const loanType = urlParams.get('enquiry');
            
            if (loanType) {
                const radioButton = document.querySelector(`input[name="loanType"][value="${loanType}"]`);
                if (radioButton) {
                    radioButton.checked = true;
                    updateFormFields(loanType);
                    handlePropertyTypeRestrictions(loanType);
                }
            } else {
                updateFormFields('');
            }
            
        } catch (error) {
            console.error('Submission error:', error);
            showFeedbackMessage('Error submitting form. Please try again.', 'error');
        } finally {
            loadingSpinner.style.display = 'none';
        }
    }
}

function showFeedbackMessage(message, type) {
    const feedbackElement = document.querySelector('.feedback-message');
    feedbackElement.textContent = message;
    feedbackElement.className = 'feedback-message feedback-' + type;
    feedbackElement.style.top = '20px';
    
    setTimeout(() => {
        feedbackElement.style.top = '-100px';
    }, 5000);
}

function updateFormFields(loanType) {
    const dynamicFields = document.getElementById('dynamicFields');
    dynamicFields.innerHTML = fieldTemplates[loanType] || '';

    if (loanType === 'coupling' || loanType === 'equity') {
        setupFullyPaidListeners();
    }
}

function setupFullyPaidListeners() {
    document.querySelectorAll('input[name="fullyPaid"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const notFullyPaidFields = document.getElementById('notFullyPaidFields');
            const equityNotFullyPaidFields = document.getElementById('equityNotFullyPaidFields');
            
            if (notFullyPaidFields) {
                notFullyPaidFields.classList.toggle('hidden', e.target.value === 'yes');
            }
            if (equityNotFullyPaidFields) {
                equityNotFullyPaidFields.classList.toggle('hidden', e.target.value === 'yes');
            }
        });
    });
}

function handlePropertyTypeRestrictions(loanType) {
    const hdbOption = document.querySelector('input[name="propertyType"][value="hdb"]');
    
    if (loanType === 'coupling' || loanType === 'equity') {
        hdbOption.disabled = true;
        hdbOption.parentElement.classList.add('disabled');
        if (hdbOption.checked) {
            document.querySelector('input[name="propertyType"][value="private"]').checked = true;
        }
    } else {
        hdbOption.disabled = false;
        hdbOption.parentElement.classList.remove('disabled');
    }
}

function validatePropertyTypeSelection(e) {
    const loanType = document.querySelector('input[name="loanType"]:checked')?.value;
    if ((loanType === 'coupling' || loanType === 'equity') && e.target.value === 'hdb') {
        e.preventDefault();
        e.target.checked = false;
        alert('HDB is not available for ' + loanType + ' loans');
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener('DOMContentLoaded', function() {
    const customSelects = document.querySelectorAll('.custom-select select');
    
    customSelects.forEach(select => {
        select.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            const logo = selectedOption.getAttribute('data-logo');
            
            if (logo) {
                this.style.backgroundImage = `url('${logo}')`;
                this.style.backgroundRepeat = 'no-repeat';
                this.style.backgroundPosition = '10px center';
                this.style.backgroundSize = '30px';
            } else {
                this.style.backgroundImage = 'none';
            }
        });
    });
});