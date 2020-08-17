var Modeler = require("../Modeler.js");
var className = 'TypeSortElementType';

var TypeSortElementType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SortElementType: {
      type: "string",
      wsdlDefinition: {
        name: "SortElementType",
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "StringType",
            "xsd:attribute": {
              default: "ASC",
              name: "sortDirectionCode",
              type: "SortDirectionCodeType",
              use: "optional",
              attribute: true
            }
          }
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sortDirectionCode: {
      type: "TypeSortDirectionCodeType",
      wsdlDefinition: {
        default: "ASC",
        name: "sortDirectionCode",
        type: "SortDirectionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  SortElementType: {
      type: "string",
      wsdlDefinition: {
        name: "SortElementType",
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "StringType",
            "xsd:attribute": {
              default: "ASC",
              name: "sortDirectionCode",
              type: "SortDirectionCodeType",
              use: "optional",
              attribute: true
            }
          }
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    sortDirectionCode: {
      type: "TypeSortDirectionCodeType",
      wsdlDefinition: {
        default: "ASC",
        name: "sortDirectionCode",
        type: "SortDirectionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSortElementType;
Modeler.register(TypeSortElementType, "TypeSortElementType");
