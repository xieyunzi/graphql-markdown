# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Queries](#queries)
    * [dialog](#queires-dialog)
    * [dialogs](#queires-dialogs)
    * [file](#queires-file)
    * [me](#queires-me)
    * [messages](#queires-messages)
  * [Mutations](#mutations)
    * [closeDialog](#mutations-closedialog)
    * [createDialog](#mutations-createdialog)
    * [createFile](#mutations-createfile)
    * [login](#mutations-login)
    * [logout](#mutations-logout)
    * [pickDialog](#mutations-pickdialog)
    * [shiftDialog](#mutations-shiftdialog)
  * [Objects](#objects)
    * [CreateDialogPayload](#objects-createdialogpayload)
    * [Dialog](#objects-dialog)
    * [File](#objects-file)
    * [FileMeta](#objects-filemeta)
    * [LoginPayload](#objects-loginpayload)
    * [Message](#objects-message)
    * [RealTimeMessageInfo](#objects-realtimemessageinfo)
    * [Token](#objects-token)
    * [User](#objects-user)
  * [Enums](#enums)
    * [DialogState](#enums-dialogstate)
    * [FileCategory](#enums-filecategory)
    * [Gender](#enums-gender)
    * [MessageSubtype](#enums-messagesubtype)
    * [UserRole](#enums-userrole)
    * [UserType](#enums-usertype)
  * [Scalars](#scalars)
    * [Boolean](#scalars-boolean)
    * [Float](#scalars-float)
    * [ID](#scalars-id)
    * [Int](#scalars-int)
    * [String](#scalars-string)

</details>

## Queries
Root of all queries.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>dialog</strong></td>
<td valign="top">Dialog</td>
<td>

customer service only

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top">ID!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dialogs</strong></td>
<td valign="top">[Dialog]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">state</td>
<td valign="top">DialogState</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>file</strong></td>
<td valign="top">File</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top">ID!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>me</strong></td>
<td valign="top">User</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>messages</strong></td>
<td valign="top">[Message]</td>
<td>

customer only

</td>
</tr>
</tbody>
</table>

## Mutations
Root of all mutations.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>closeDialog</strong></td>
<td valign="top">Boolean</td>
<td>

customer service only

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top">ID!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createDialog</strong></td>
<td valign="top">CreateDialogPayload</td>
<td>

customer only

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">customer</td>
<td valign="top">UserInput</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>createFile</strong></td>
<td valign="top">File</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">description</td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">duration</td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">height</td>
<td valign="top">Int</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">image_url</td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">mime</td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">name</td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">orientation</td>
<td valign="top">Int</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">size</td>
<td valign="top">Int</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">title</td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">url</td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">uuid</td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">width</td>
<td valign="top">Int</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>login</strong></td>
<td valign="top">LoginPayload</td>
<td>

登录

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">client_id</td>
<td valign="top">String!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">identity</td>
<td valign="top">String!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top">String!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>logout</strong></td>
<td valign="top">Boolean</td>
<td>

登出

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>pickDialog</strong></td>
<td valign="top">Dialog</td>
<td>

customer service only

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top">ID!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>shiftDialog</strong></td>
<td valign="top">Boolean</td>
<td>

customer service only

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top">ID!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">to_service_id</td>
<td valign="top">ID</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">to_service_type</td>
<td valign="top">UserType</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### [CreateDialogPayload](#objects-createdialogpayload)

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>dialog</strong></td>
<td valign="top">Dialog</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rtm_info</strong></td>
<td valign="top">RealTimeMessageInfo</td>
<td></td>
</tr>
</tbody>
</table>

### [Dialog](#objects-dialog)

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>customer_id</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_dialog_id</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>from_service_id</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top">ID!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>is_shifted</strong></td>
<td valign="top">Boolean</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>messages</strong></td>
<td valign="top">[Message]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>service_id</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>state</strong></td>
<td valign="top">DialogState</td>
<td></td>
</tr>
</tbody>
</table>

### [File](#objects-file)

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top">FileCategory</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top">ID!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>meta</strong></td>
<td valign="top">FileMeta</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mime</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>preview_url</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>size</strong></td>
<td valign="top">Int</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>url</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>user_id</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
</tbody>
</table>

### [FileMeta](#objects-filemeta)

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>height</strong></td>
<td valign="top">Int</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>orientation</strong></td>
<td valign="top">Int</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>width</strong></td>
<td valign="top">Int</td>
<td></td>
</tr>
</tbody>
</table>

### [LoginPayload](#objects-loginpayload)

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>me</strong></td>
<td valign="top">User</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>rtm_info</strong></td>
<td valign="top">RealTimeMessageInfo</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top">Token</td>
<td></td>
</tr>
</tbody>
</table>

### [Message](#objects-message)

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>created_at</strong></td>
<td valign="top">Int</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>customer_id</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>deleted</strong></td>
<td valign="top">Boolean</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>dialog_id</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top">ID!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>key</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subtype</strong></td>
<td valign="top">MessageSubtype</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>text</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>updated_at</strong></td>
<td valign="top">Int</td>
<td></td>
</tr>
</tbody>
</table>

### [RealTimeMessageInfo](#objects-realtimemessageinfo)

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>ws_token</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>ws_url</strong></td>
<td valign="top">String!</td>
<td></td>
</tr>
</tbody>
</table>

### [Token](#objects-token)

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>access_token</strong></td>
<td valign="top">String!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>expires_in</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>refresh_token</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>revoked</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>scope</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>token_type</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
</tbody>
</table>

### [User](#objects-user)

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>active</strong></td>
<td valign="top">Boolean</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>external_id</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>gender</strong></td>
<td valign="top">Gender</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top">ID!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>phone</strong></td>
<td valign="top">String</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top">UserRole</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>type</strong></td>
<td valign="top">UserType</td>
<td></td>
</tr>
</tbody>
</table>

## Enums

### DialogState

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>pending</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>in_hand</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>done</strong></td>
<td></td>
</tr>
</tbody>
</table>

### FileCategory

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>audio</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>video</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>image</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>text</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>other</strong></td>
<td></td>
</tr>
</tbody>
</table>

### Gender

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>male</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>female</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>unknown</strong></td>
<td></td>
</tr>
</tbody>
</table>

### MessageSubtype

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>normal</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>file</strong></td>
<td></td>
</tr>
</tbody>
</table>

### UserRole

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>service</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>customer</strong></td>
<td></td>
</tr>
</tbody>
</table>

### UserType

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>suncity</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>suntravel</strong></td>
<td></td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

### Float

### ID

### Int

### String

