// database module provider token
export const DATABASE_PROVIDER_TOKEN = 'SequlizeToken';
// crypto 密钥
export const SECRET = 'order-system';
// 数据库操作异常
export const DATABASE_EXCEPTION = 'database_exception';

// ================================= staff start
// staff 模块 provider token
export const STAFF_PROVIDER_TOKEN = 'StaffRepository';
// 员工已存在
export const STAFFALREADYEXIST = 'staff_already_exists';
// 员工不存在
export const STAFFNOEXIST = 'staff_no_exists';
// ================================  staff end

// ================================ login start
// 成功注册
export const SUCCESS_REGISTER = 'success_register';
// 密码错误
export const FAIL_PASSWORD_ERROR = 'fail_password_wrong';
// 登录成功
export const SUCCESS_LOGIN = 'success_login';
// ================================ login end

// ================================ vendor start
// vendor 模块 provider token
export const VENDOR_PROVIDER_TOKEN = 'VendorReposity';
// vendor已存在
export const VENDORALREADYEXIST = 'vendor_already_exists';
// vendor添加成功
export const VENDORINSERTSUCCESS = 'vendor_created_success';
// ================================ vendor end

// ================================ product start
export const PRODUCT_PROVIDER_TOKEN = 'ProductReposity';
export const PRODUCT_NOTE_PROVIDER_TOKEN = 'ProductNoteReposity';
export const PRODUCTALREADYEXIST = 'product_already_exists';
export const PRODUCTINSERTSUCCESS = 'product_created_success';
// ================================ product end

// ================================ customer start
export const CUSTOMER_PROVIDER_TOKEN = 'customerReposity';
export const CUSTOMERALREADYEXIST = 'customer_already_exists';
export const CUSTOMERINSERTSUCCESS = 'customer_created_success';
// ================================ customer end
